from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, DeclarativeBase
import os

from dotenv import load_dotenv

load_dotenv()  # 👈 THIS IS THE FIX


print("PGUSER:", os.getenv("PGUSER"))

DATABASE_URL = (
    f"postgresql+psycopg://{os.getenv('PGUSER')}:"
    f"{os.getenv('PGPASSWORD')}@"
    f"{os.getenv('PGHOST')}:5432/"
    f"{os.getenv('PGDATABASE')}?sslmode=require"
)

print("DB URL:", DATABASE_URL)

engine = create_engine(
    DATABASE_URL,
    pool_pre_ping=True,
    connect_args={"sslmode": "require"},
)

SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine,
)


class Base(DeclarativeBase):
    pass