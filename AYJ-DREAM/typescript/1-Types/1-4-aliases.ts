{
  /**
   * Type Aliases
   */
  type Text = string;
  const name: Text = ' yujin';
  const address: Text = 'token';
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name: 'an',
    age: 12,
  };

  /**
   * String Literal Types
   */

  type Name = 'name';
  let yujinName: Name;
  yujinName = 'name';
  type JSON = 'json';
  const json: JSON = 'json';
}
