FROM python:3.9

WORKDIR /app

COPY requirements.txt ./

RUN apt update && \
    pip install -r requirements.txt
