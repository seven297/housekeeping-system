import useStorage, { StorageKey } from "../../../hooks/useStorage";

export interface List {}

export interface Detail extends Record<string, unknown> {
  id?: number;
  pid: number;
  name: string;
  state: number;
  remark?: string;
}


export function useProjectCRUD() {
  const localDB = useStorage(StorageKey.project)

  /** 查询列表 */
  function getRows() {
    return localDB.get<Detail[]>() || []
  }

  /** 获取详情 */
  function getDetail(id: number) {
    const rows = getRows()
    if (rows.length) {
      return rows.find(e => e.id === id) as Detail
    }
    return null
  }

  /** 新增项目 */
  function insertRow(row: Detail) {
    localDB.set([...getRows(), row])
  }
  

  return {
    getRows,
    getDetail,

    insertRow
  }
}