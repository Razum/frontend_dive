import styles from '@/app/has_not_animation/page.module.css';

function HasNotAnimation() {
  return (
      <div>
          <h1>Has not animation</h1>
          <ul className={styles.list}>
              <li>Apple</li>
              <li>Banana</li>
              <li>Orange</li>
              <li>Mango</li>
              <li>Pineapple</li>
              <li>Strawberry</li>
              <li>Blueberry</li>
              <li>Grape</li>
              <li>Watermelon</li>
              <li>Peach</li>
          </ul>


          <ul className={styles.list2} style={{"--sibling-count": 9}}>
              <li style={{'--sibling-index': 1}}>Apples</li>
              <li style={{'--sibling-index': 2}}>Bananas</li>
              <li style={{'--sibling-index': 3}}>Oranges</li>
              <li style={{'--sibling-index': 4}}>Grapes</li>
              <li style={{'--sibling-index': 5}}>Mangoes</li>
              <li style={{'--sibling-index': 6}}>Strawberries</li>
              <li style={{'--sibling-index': 7}}>Watermelons</li>
              <li style={{'--sibling-index': 8}}>Blueberries</li>
              <li style={{'--sibling-index': 9}}>Kiwis</li>
          </ul>
      </div>
  );
}

export default HasNotAnimation;