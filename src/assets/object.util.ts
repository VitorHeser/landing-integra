export class ObjectUtil {
  private static readonly UNDERSCORE = '_';
  private static readonly COMMA = ',';
  private static readonly DOUBLE_QUOTES = '"';
  private static readonly QUOTES_POINTS = '":';

  public static toJSON(object: any) {
    let a = '{';
    for (const prop in object) {
      if (prop.startsWith(ObjectUtil.UNDERSCORE)) {
        if (object[prop] != null && ((object[prop] instanceof Array && object[prop].length > 0) || !(object[prop] instanceof Array))) {
          a += ObjectUtil.DOUBLE_QUOTES;
          a += prop.substr(1, prop.length);
          a += ObjectUtil.QUOTES_POINTS;
          a += JSON.stringify(object[prop.substr(1, prop.length)]);
          a += ObjectUtil.COMMA;
        }
      }
    }
    if (a.endsWith(ObjectUtil.COMMA)) {
      a = a.substr(0, a.length - 1);
    }
    a += '}';
    return JSON.parse(a);
  }

  public static isFilledOrZero(object: any) {
    let fieldFilled = this.isFilled(object);
    if (typeof object === 'number') {
      fieldFilled = object >= 0;
    }
    return fieldFilled;
  }

  public static isFilled(object: any) {
    let fieldFilled = true;

    if (object === null || object === undefined) {
      fieldFilled = false;
    }

    if (typeof object === 'number') {
      fieldFilled = object > 0;
    }

    if (typeof object === 'string') {
      fieldFilled = object.trim() !== '';
    }

    if (Array.isArray(object)) {
      fieldFilled = object.length > 0;
    }

    return fieldFilled;
  }
}
