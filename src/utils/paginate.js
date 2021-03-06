import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items) // 转化为lodash对象
  .slice(startIndex) 
  .take(pageSize) 
  .value(); // 转为数组
}
