# Import installed packages
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session
from sqlalchemy.orm import sessionmaker

# Local application imports
from app.core.constants import PG_DATABASE_URI

engine = create_engine(PG_DATABASE_URI, pool_pre_ping=True)

Session = sessionmaker(autocommit=False, autoflush=False, bind=engine)

db_session = scoped_session(Session)
