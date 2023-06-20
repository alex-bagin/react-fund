import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        placeholder="Suche..."
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
        defaultValue="Sortierung"
        options={[
          { name: "nach Titel", value: "title" },
          { name: "nach Beschreibung", value: "body" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
