import { useState,setState } from 'react';
import { CORE_CONCEPTS,EXAMPLES } from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';



function App() {

  let [selectedTopic,setSelectedTopic] = useState("components");

  function handleSelect(selectedButton){
      setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              image={CORE_CONCEPTS[0].image}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              image={CORE_CONCEPTS[1].image}
              description={CORE_CONCEPTS[1].description}>
            </CoreConcept>
            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              image={CORE_CONCEPTS[2].image}
              description={CORE_CONCEPTS[2].description}
            >
            </CoreConcept>
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              image={CORE_CONCEPTS[3].image}
              description={CORE_CONCEPTS[3].description}
            >
            </CoreConcept>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>Components</TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}> Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
           <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
           </div>
        </section>
      </main>
    </div>
  );
}

export default App;
