import lodash from "lodash";

type RadonmaizeArrayProps = {
  data: any[];
  limit?: number;
};

export function randomizeArray<D = any[]>({
  data,
  limit = 5,
}: RadonmaizeArrayProps): D {
  const shuffled = lodash.shuffle(data);
  const sliced = lodash.slice(shuffled, 0, limit);
  return sliced as unknown as D;
}
