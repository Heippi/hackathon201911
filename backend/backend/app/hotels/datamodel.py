"""
PEP 557 -- Data Classes

This PEP describes an addition to the standard library called Data Classes.
Although they use a very different mechanism, Data Classes can be thought of as
"mutable namedtuples with defaults". Because Data Classes use normal class
definition syntax, you are free to use inheritance, metaclasses, docstrings,
user-defined methods, class factories, and other Python class features.

"""
from pydantic import BaseModel


class CreateParams(BaseModel):
    name: str
    metadata: object
    address: str = None
