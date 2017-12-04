import { Iso } from 'monocle-ts'
import * as t from 'io-ts'

export const ISOType = <I, O>(name: string, iso: Iso<I, O>, is: (x: O) => x is O): t.Type<I, O> =>
  new t.Type<I, O>(name, is, (s, _) => t.success(iso.to(s)), iso.from)
