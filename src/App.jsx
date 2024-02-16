import { useState,setState } from 'react';
import { CORE_CONCEPTS,EXAMPLES } from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';


function App() {

  let [selectedTopic,setSelectedTopic] = useState("");

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
            {CORE_CONCEPTS.map((item) => (
              <CoreConcept
                title={item.title}
                image={item.image}
                description={item.description}
            />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton 
                onSelect={() => handleSelect("components")}
                isSelected={selectedTopic === "components"}
                >Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}
            isSelected={selectedTopic === "jsx"}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}
            isSelected={selectedTopic === "props"}> Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}
            isSelected={selectedTopic === "state"}>State</TabButton>
          </menu>
          
              {!selectedTopic &&<p>Please select a topic</p>}
              {selectedTopic && (
               <div id="tab-content">
                  <h3>{EXAMPLES[selectedTopic].title}</h3>
                  <p>{EXAMPLES[selectedTopic].description}</p>
                  <pre>
                    <code>
                    {EXAMPLES[selectedTopic].code}
                    </code>
                  </pre>
              </div>
              )}
        </section>
      </main>
    </div>
  );
}

export default App;
