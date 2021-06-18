const styles = ['Джаз', 'Блюз',];
styles.push('Рок-н-ролл');
console.log(styles);
styles.splice(1, 1, 'Классика');//styles[1] = 'Классика'
console.log(styles);
styles.splice(1, 0); //
console.log(styles);
styles.unshift('Реп', 'Регги');
console.log(styles);
