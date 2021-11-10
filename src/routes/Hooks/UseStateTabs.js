import { useState } from 'react';

const content = [
  {
    tab: 'Section 1',
    content: 'I`m the content of Section 1',
  },
  {
    tab: 'Section 2',
    content: 'I`m the content of Section 2',
  },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

const UseState_Tabs = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="tabs">
      <h1>Tabs</h1>
      {content.map((section, idx) => (
        <button onClick={() => changeItem(idx)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default UseState_Tabs;
