/** 项目请求参数 */
export type ProjectForm = {
  id: number;
  pid: number;
  name: string;
  state: number;
  remark?: string;
}

export interface ProjectBody extends ProjectForm {
  createTime?: string
}

