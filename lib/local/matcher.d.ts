interface Data<T = undefined> {
  criteria: string;
  data: T;
}

export default class Matcher {
  add<T>(criteria: string, data?: T);
  match<T = any>(criteria: string): Data<T>[];
}
