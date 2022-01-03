import "./App.css";
import Title from "./component/Title";
import Baseline from "./component/Baseline";
import Link from "./component/Link";
import Rectangle from "./component/Rectangle";
import Side from "./component/Side";
function App() {
  return (
    <div className="macbook">
      <div className="header">
        <Title />
        <Baseline />
      </div>
      <div className="body">
        <div className="navigation">
          <Link />
          <Link />
          <Link />
          <Link />
        </div>
        <div className="main">
          <div className="maincontent">
            <Rectangle
              className="item1"
              title="TITLE HEADING"
              subtitle="Title description"
              description="Mauris consectetur tincidunt magna. Donec nec ipsum sem. Donec lacus nunc, pretium et erat vel, accumsan ullamcorper ipsum. Mauris non lobortis justo. Vivamus scelerisque, augue id aliquam aliquet, augue erat venenatis nulla, at ultrices nulla lectus id libero. Suspendisse sed elementum erat, quis porttitor tortor. In a congue neque.

"
            />

            <Rectangle
              title="TITLE HEADING"
              subtitle="Title description"
              description="Morbi at pharetra odio. Quisque eget erat ipsum. Praesent cursus ac augue a rutrum. Vestibulum hendrerit nulla eget justo tempor commodo. Nam quis tincidunt tortor. Vivamus eu posuere nisi, at ullamcorper dui. Integer pulvinar, nisl a lacinia egestas, nisi nulla mollis urna, a tempus odio augue sit amet est. Aenean commodo congue velit non eleifend. Donec ac metus in diam lobortis feugiat vitae ac ligula.

         "
            />
          </div>

          <div>
            <Side
              title="ABOUT ME"
              description="Cras interdum pharetra felis eu faucibus."
            />
          </div>
        </div>
      </div>
      <div className="footer">Made with React at Le Reacteur By Nono</div>
    </div>
  );
}

export default App;
