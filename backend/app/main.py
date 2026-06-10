from fastapi import FastAPI

app = FastAPI(
    title="Task Management API",
    version="1.0.0",
)


@app.get("/")
def root():
    return {
        "message": "Task Management API",
        "status": "running",
    }


@app.get("/health")
def health():
    return {
        "status": "healthy",
    }