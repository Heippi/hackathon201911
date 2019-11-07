"""
APP.HOTELS.ENDPOINTS

This file provides hotels endpoints
"""
# Third party imports
from fastapi import APIRouter

# Local application imports
from app.hotels.datamodel import CreateParams
from app.hotels import provider as hotelsProvider

# Represents router configuration.
# HotelsRouter is like an array of route configurations.
# Each one has the different methods availabled  for the module.
HotelsRouter = APIRouter()


@HotelsRouter.get("/get/")
async def get():
    return hotelsProvider.get()


@HotelsRouter.get("/get/id/{id}")
async def get_by_id(id: int):
    return hotelsProvider.getById(id)


@HotelsRouter.get("/get/name/{name}")
async def get_by_name(name: str):
    return hotelsProvider.getByName(name)


@HotelsRouter.post("/create/")
async def create(args: CreateParams):
    return hotelsProvider.newHotels(args)
