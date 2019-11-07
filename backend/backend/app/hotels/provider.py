"""
APP.TRAINING.PROVIDERS

This file provides different functions for business logic of training.
"""
import cv2
import json
import numpy as np
from datetime import datetime
# Third party imports
from fastapi import HTTPException
# Local application imports
from app.db.session import db_session
from app.db.models.hotels import Hotels
from app.hotels.datamodel import CreateParams


def get():
    return db_session.query(Hotels).all()


def getById(item_id: int):
    query = db_session.query(Hotels)
    return query.filter(Hotels.id == item_id).first()


def getByName(name: str):
    query = db_session.query(Hotels)
    return query.filter(Hotels.name == name).first()


def create(args: CreateParams):
    hotels = Hotels(
        name=args.name,
        address=args.address,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    db_session.add(hotels)
    db_session.commit()
    db_session.refresh(hotels)
    return hotels


def newHotels(args: CreateParams):
    # TODO: Logic before create a hotel

    return create(args)
