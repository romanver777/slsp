import ParamEditor from "./components/paramEditor";

const params = [
  {
    id: 1,
    name: "Назначение",
  },
  {
    id: 2,
    name: "Длина",
  },
];
const model = {
  paramValues: [
    {
      paramId: 1,
      value: "повседневное",
    },
    {
      paramId: 2,
      value: "макси",
    },
  ],
};

function App() {
  return (
    <div>
      <h1>Редактор моделей</h1>
      <ParamEditor params={params} model={model} />
    </div>
  );
}

export default App;
