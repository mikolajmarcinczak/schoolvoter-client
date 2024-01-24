/*import axios from 'axios'

class UniversityDataService {
  getAll(): Promise<any> {
    return axios.get("/query");
  }

  getSingle(name: string): Promise<any> {
    return axios.get(`/query/${name}`);
  }

  getByScore(min: string, max: string): Promise<any> {
    return axios.get(`/query/score?min=${min}&max=${max}`);
  }

  create(data: any): Promise<any> {
    return axios.post("/context", data);
  }

  update(name: string, data: any): Promise<any> {
    return axios.put(`/context/${name}`, data);
  }

  deleteAll(): Promise<any> {
    return axios.delete("/context");
  }

  delete(name: string): Promise<any> {
    return axios.delete(`/context/${name}`);
  }
}

export default new UniversityDataService();*/