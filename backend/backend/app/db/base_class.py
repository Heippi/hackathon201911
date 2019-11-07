# -*- coding: utf-8 -*-

# Import standard library packages
from datetime import datetime

# Import installed packages
from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import DateTime

from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.ext.declarative import declared_attr

# Local application imports
from app.utils import serializeDate

class CustomBase(object):
    """
    Base class for SQLAlchemy declarative base model.

    To define models, subclass :attr:`db.Model <SQLAlchemy.Model>`, not this class.
    To customize ``db.Model``, subclass this and pass it as ``model_class`` to :func:`SQLAlchemy`.
    """
    __abstract__ = True

    # Generate __tablename__ automatically
    @declared_attr
    def __tablename__(self):
        return CustomBase.__name__.lower()

    id = Column(Integer, primary_key=True)
    created_at = Column(DateTime, index=True)
    updated_at = Column(DateTime, index=True)

    def serialize(self):
        return {
            'id': self.id,
            'created_at': serializeDate(self.created_at),
            'updated_at': serializeDate(self.updated_at)
        }

Base = declarative_base(cls=CustomBase)