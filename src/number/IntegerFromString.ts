import * as t from 'io-ts'
import { NumberFromString, NumberFromStringType } from './NumberFromString'

export interface IntegerFromStringC extends t.RefinementType<NumberFromStringType, number, string, unknown> {}

/**
 * @example
 * import { IntegerFromString } from 'io-ts-types/lib/number/IntegerFromString'
 * import { right } from 'fp-ts/lib/Either'
 * import { PathReporter } from 'io-ts/lib/PathReporter'
 *
 * assert.deepStrictEqual(IntegerFromString.decode('1'), right(1))
 * assert.deepStrictEqual(PathReporter.report(IntegerFromString.decode('1.1')), ['Invalid value 1.1 supplied to : IntegerFromString'])
 */
// tslint:disable-next-line: deprecation
export const IntegerFromString: IntegerFromStringC = t.refinement(
  NumberFromString,
  // tslint:disable-next-line: deprecation
  t.Integer.predicate,
  'IntegerFromString'
)
