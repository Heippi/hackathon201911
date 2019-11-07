from sqlalchemy import Column
from sqlalchemy import String
from sqlalchemy import JSON

from app.db.base_class import Base


class Restaurants(Base):

    __tablename__ = 'restaurants'

    # Properties
    name = Column(String, unique=True, index=True)
    metadata = Column(JSON)
    address = Column(String)

    def __repr__(self):
        return f'{self.name}'

    @property
    def serialize(self):
        json_object = Base.serialize(self)
        json_object.update({
            'name': self.name,
            'metadata': self.metadata,
            'address': self.address
        })
        return json_object
