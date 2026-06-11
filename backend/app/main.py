from fastapi import FastAPI

from app.db.database import Base, engine
from app.models.user import User

from app.api.v1.auth import router as auth_router
from app.api.v1.health import router as health_router

# Base.metadata.drop_all(bind=engine)
# Base.metadata.create_all(bind=engine)

app = FastAPI(
    title='Task Management API',
)

app.include_router(auth_router, prefix='/api/v1')
app.include_router(health_router, prefix='/api/v1')