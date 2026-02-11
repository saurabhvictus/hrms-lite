from fastapi import APIRouter, HTTPException
from app.database import attendance_collection, employee_collection
from app.schemas.attendance import AttendanceCreate

router = APIRouter(prefix="/attendance", tags=["Attendance"])

@router.post("", status_code=201)
def mark_attendance(data: AttendanceCreate):
    if not employee_collection.find_one({"employeeId": data.employeeId}):
        raise HTTPException(404, "Employee not found")

    attendance_collection.update_one(
        {
            "employeeId": data.employeeId,
            "date": str(data.date)
        },
        {
            "$set": {
                "status": data.status
            }
        },
        upsert=True
    )

    return {"message": "Attendance saved"}


@router.get("/{employeeId}")
def get_attendance(employeeId: str):
    records = list(
        attendance_collection.find(
            {"employeeId": employeeId},
            {"_id": 0}
        )
    )
    return records

@router.get("")
def list_attendance():
    records = list(attendance_collection.find({}, {"_id": 0}))
    return records
