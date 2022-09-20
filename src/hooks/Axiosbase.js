import axios from "axios";

export const Axiosbase = () => {
    const base = axios.create({
      baseURL:"https://bizka.onrender.com"
    })
  return (
    <div>baseurl</div>
  )
}
