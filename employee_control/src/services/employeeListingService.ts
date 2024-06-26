import IService from "@/interfaces/service";
import api from "./api";
import Employee from "@/interfaces/employee";



export type ExmployeeListingServiceProps = Pick<Employee, "id">;


export default class ExmployeeListingService implements IService<Employee[]>{
    static url: string = "/employees"

    private handleData(data: any[]){
        return data.map(item => ({...item, id: item._id}))
    }

    async execute(): Promise<Employee[]> {
        const { data } =  await api.get(ExmployeeListingService.url);

        return this.handleData(data.data);
    }
    
}