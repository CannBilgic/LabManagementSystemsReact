import axios from "axios";

export const fetchReportList =async () =>{
    const {data} = await axios.get("http://localhost:8080/api/report/EN/getAll")
    return data;
}

export const fetchReport =async (reportId) =>{
    const {data} = await axios.get(`http://localhost:8080/api/report/EN/getOneReport/${reportId}`)
    return data;
}

export const fetchRegisterPatient = async (input)=>{
    const {data} = await axios.post(`http://localhost:8080/api/patient/EN/create`,input)
    return data;
}
export const fetchLoginPatient = async (input)=>{
    const {data} = await axios.post(`http://localhost:8080/api/patient/EN/Login`,input)
    return data;
}

export const fetchRegisterLab = async (input)=>{
    const {data} = await axios.post(`http://localhost:8080/api/Laborant/EN/create`,input)
    return data;
}
export const fetchLoginLab = async (input)=>{
    const {data} = await axios.post(`http://localhost:8080/api/Laborant/EN/Login`,input)
    return data;
}
export const deleteReport = async (reportId)=>{
    const {data} = await axios.delete(`http://localhost:8080/api/report/EN/delete/${reportId}`)
    return data;
}
export const fetchPatient = async ()=>{
    const {data} = await axios.get("http://localhost:8080/api/patient/EN/getAll")
    return data;
}

export const fetchLaborant = async ()=>{
    const {data} = await axios.get("http://localhost:8080/api/Laborant/EN/getAll")
    return data;
}

export const fetchRole = async ()=>{
    const {data} = await axios.get("http://localhost:8080/api/role/EN/getAll")
    return data;
}

export const deletePatient = async (patientId)=>{
    const {data} = await axios.delete(`http://localhost:8080/api/patient/EN/delete/${patientId}`)
    return data;
}

export const fetchPatientId = async (patientId)=>{
    const {data} = await axios.get(`http://localhost:8080/api/patient/EN/getOne/${patientId}`)
    return data;
}

export const updatePatient = async (input,patientId)=>{
    const {data} = await axios.put(`http://localhost:8080/api/patient/EN/update/${patientId}`,input)
    return data;
}
export const deleteLaborant = async (laborantId)=>{
    const {data} = await axios.delete(`http://localhost:8080/api/Laborant/EN/delete/${laborantId}`)
    return data;
}
export const fetchCreateRole= async (input)=>{
    const {data} = await axios.post(`http://localhost:8080/api/role/EN/create`,input)
    return data;
}
export const updateReport = async (input,patientId)=>{
    const {data} = await axios.put(`http://localhost:8080/api/report/EN/update/${patientId}`,input)
    return data;
}

export const createReport = async (input)=>{
    const {data} = await axios.post(`http://localhost:8080/api/report/EN/create`,input)
    return data;
}
export const getImage = async ()=>{
    const {data} = await axios.get(`http://localhost:8080/api/image/EN/getAll`)
    return data;
}


export const fetchPatientNames = async (input)=>{
    const {data} = await axios.post(`http://localhost:8080/api/patient/EN/getNameAndSurname`,input)
    return data;
}


export const fetchLabName = async (input)=>{
    const {data} = await axios.post(`http://localhost:8080/api/Laborant/EN/getNameAndSurname`,input)
    return data;
}
export const fetchReportDate = async ()=>{
    const {data} = await axios.get(`http://localhost:8080/api/report/EN/sortDate`)
    return data;
}