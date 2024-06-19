import { createAsyncThunk } from "@reduxjs/toolkit";
import { TOKEN_LOCALSTORAGE_KEY } from "@/shared/consts/localStorage";
export const fetchEmployeeByID = createAsyncThunk("employeeDetails/fetchEmployeeById", async (employeeId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    const token = localStorage.getItem(TOKEN_LOCALSTORAGE_KEY);
    if (!token) {
        return rejectWithValue("User not found");
    }
    try {
        if (!employeeId) {
            throw new Error();
        }
        const decodedToken = JSON.parse(token);
        if (!decodedToken) {
            return rejectWithValue("Invalid token data");
        }
        const employee = await extra.api.get(`/employees/${employeeId}`, {
            headers: {
                Authorization: `Bearer ${decodedToken}`,
            },
        });
        if (!employee.data) {
            throw new Error();
        }
        return employee.data;
    }
    catch (error) {
        console.error("Failed to fetch employee data!", error);
        return rejectWithValue("Failed to fetch employee data");
    }
});
