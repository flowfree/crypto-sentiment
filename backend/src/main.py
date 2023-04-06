from typing import Union
from datetime import datetime

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from transformers import pipeline

from .scraper import get_metadata_from_url


classifier = pipeline(model='flowfree/bert-finetuned-cryptos')

app = FastAPI() 

origins = [
    'http://localhost:3000',
    'https://localhost:3000',
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)


@app.get('/')
def home():
    return {
        'message': 'API is up and running.',
        'time': datetime.now().isoformat(),
    }


class Payload(BaseModel):
    url: str


@app.post('/predict')
def predict(payload: Payload):
    info = get_metadata_from_url(payload.url)

    sentiment = classifier(info['title'])
    info['sentiment'] = sentiment[0]

    return info
