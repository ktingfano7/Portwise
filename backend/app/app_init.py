from fastapi import FastAPI
from backend.app.routes.match import router as match_router

def create_app():
    app = FastAPI()
    app.include_router(match_router, prefix="/api")
    return app
