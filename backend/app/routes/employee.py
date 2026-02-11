from fastapi import APIRouter, HTTPException
from app.database import employee_collection
from app.schemas.employee import EmployeeCreate

router = APIRouter(prefix="/employees", tags=["Employees"])

@router.post("", status_code=201)
def create_employee(emp: EmployeeCreate):
    try:
        if employee_collection.find_one({
            "$or": [
                {"employeeId": emp.employeeId},
                {"email": emp.email}
            ]
        }):
            raise HTTPException(409, detail="Employee already exists")

        employee_collection.insert_one(emp.model_dump())

        return {"message": "Employee added"}
    except Exception as e:
        print("POST /employees ERROR:", e)
        raise HTTPException(status_code=500, detail=str(e))

@router.get("")
def get_employees():
    employees = list(employee_collection.find({}, {"_id": 0}))
    return employees

@router.delete("/{employeeId}")
def delete_employee(employeeId: str):
    result = employee_collection.delete_one({"employeeId": employeeId})
    if result.deleted_count == 0:
        raise HTTPException(404, "Employee not found")
    return {"message": "Employee deleted"}
