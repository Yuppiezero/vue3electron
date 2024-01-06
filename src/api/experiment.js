import {post} from "@/api/config";

/**
 * 新建报告
 * @param manufacture 设备厂家
 * @param model 型号
 * @param created_at 测试日期
 * @param user 测试人员
 * @param item 项目
 * @returns {*}
 */
export function createExp({ manufacture, model, created_at, user, item }) {
  return post('/exp', { manufacture, model, created_at, user, item })
}
