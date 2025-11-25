import z from 'zod';

/**
 * 주어진 데이터를 Zod 스키마로 검증한 후 반환한다.
 * @param schema 검증할 Zod 스키마
 * @param data 검증할 데이터
 * @returns 검증된 데이터
 * @throws Zod 검증 실패 시 Error 발생
 */
export function validateSchema<T>(schema: z.ZodType<T>, data: unknown): z.infer<typeof schema> {
  const result = schema.safeParse(data);

  if (!result.success) {
    console.error(result.error);
    throw new Error(result.error.message);
  }

  return result.data;
}

export type * from './resume';
export { default as Resume } from './resume';
