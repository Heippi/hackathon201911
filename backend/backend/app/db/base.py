# Import all the models, so that Base has them before being
# imported by Alembic
from app.db.base_class import Base  # noqa
from app.db.models.hotels import Hotels
from app.db.models.restaurants import Restaurants
from app.db.models.transports import Transports
