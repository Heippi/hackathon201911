# Third party imports
from fastapi import FastAPI
from fastapi import APIRouter
from starlette.middleware.cors import CORSMiddleware

# Local application imports
from app.hotels.endpoints import HotelsRouter

# Tiangolo
# Web ApplicationFramework
app = FastAPI()

# Represents router configuration.
# appRouter is like an array of route configurations.
# Each one has the different methods availabled  for App module.
appRouter = APIRouter()

# Includes routers from other modules
appRouter.include_router(HotelsRouter, prefix='/hotels', tags=["Hotels"])  # noqa

app.include_router(appRouter, prefix='/api')

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True
)


@app.get("/")
def read_root():
    return "Nothing to see here."
