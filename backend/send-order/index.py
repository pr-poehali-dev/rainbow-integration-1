import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Принимает заявку с сайта и отправляет уведомление на email владельца."""

    cors_headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors_headers, "body": ""}

    if event.get("httpMethod") != "POST":
        return {"statusCode": 405, "headers": cors_headers, "body": json.dumps({"error": "Method not allowed"})}

    body = json.loads(event.get("body") or "{}")
    name = body.get("name", "").strip()
    phone = body.get("phone", "").strip()
    car = body.get("car", "").strip()
    description = body.get("description", "").strip()

    if not name or not phone:
        return {
            "statusCode": 400,
            "headers": cors_headers,
            "body": json.dumps({"error": "Имя и телефон обязательны"}),
        }

    smtp_host = os.environ["SMTP_HOST"]
    smtp_port = int(os.environ["SMTP_PORT"])
    smtp_user = os.environ["SMTP_USER"]
    smtp_password = os.environ["SMTP_PASSWORD"]
    notify_email = os.environ["NOTIFY_EMAIL"]

    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"Новая заявка с сайта — {name}"
    msg["From"] = smtp_user
    msg["To"] = notify_email

    html = f"""
    <html><body style="font-family: Arial, sans-serif; color: #222;">
      <h2 style="color: #cc0000;">Новая заявка с сайта</h2>
      <table cellpadding="8" cellspacing="0" style="border-collapse: collapse;">
        <tr><td style="font-weight:bold; color:#555;">Имя:</td><td>{name}</td></tr>
        <tr><td style="font-weight:bold; color:#555;">Телефон:</td><td><a href="tel:{phone}">{phone}</a></td></tr>
        <tr><td style="font-weight:bold; color:#555;">Марка и модель:</td><td>{car or "—"}</td></tr>
        <tr><td style="font-weight:bold; color:#555;">Задача:</td><td>{description or "—"}</td></tr>
      </table>
    </body></html>
    """

    msg.attach(MIMEText(html, "html"))

    with smtplib.SMTP_SSL(smtp_host, smtp_port) as server:
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, notify_email, msg.as_string())

    return {
        "statusCode": 200,
        "headers": cors_headers,
        "body": json.dumps({"ok": True}),
    }
