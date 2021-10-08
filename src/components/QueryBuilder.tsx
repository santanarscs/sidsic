import { useState, useEffect } from "react";
import { Query, Builder, BasicConfig, Utils as QbUtils, JsonTree } from 'react-awesome-query-builder'
import AntdConfig from 'react-awesome-query-builder/lib/config/antd';
// import 'antd/dist/antd.css';
// import 'react-awesome-query-builder/lib/css/styles.css';
// import 'react-awesome-query-builder/lib/css/compact_styles.css';



const InitialConfig = AntdConfig;

interface QueryBuilderProps {
  fields: any
  handleSetStateQuery: any
  initialTree?: any
}


function QueryBuilder({fields, initialTree = {}, handleSetStateQuery}: QueryBuilderProps) {
  const queryValue = initialTree && Object.keys(initialTree).length > 0 ? initialTree as JsonTree : {"id": QbUtils.uuid(), "type": "group"} as JsonTree;
  const [config, setConfig] = useState<BasicConfig>({
      ...InitialConfig,
    settings: {
      ...InitialConfig.settings,
      valueLabel: "Valor",
      valuePlaceholder: "Valor",
      fieldLabel: "Campo",
      operatorLabel: "Operador",
      funcLabel: "Função",
      fieldPlaceholder: "Selecione Campo",
      funcPlaceholder: "Selecione Função",
      operatorPlaceholder: "Selecione Operador",
      addGroupLabel: "Add Grupo",
      addRuleLabel: "Add Regra",
      notLabel: "Não",
      valueSourcesPopupTitle: "Selecione Valor do Recurso",
    },
    fields: fields
  })
  const [tree, setTree] = useState(QbUtils.checkTree(QbUtils.loadTree(queryValue), config))
  useEffect(() => {
    setTree(QbUtils.checkTree(QbUtils.loadTree(queryValue), {...config, fields}))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[fields])

  const onChange = (immutableTree:any, config:any) => {
    setTree(immutableTree)
    setConfig({...config, fields})
    handleSetStateQuery({
      mongo_query: QbUtils.mongodbFormat(immutableTree, config),
      tree_query: QbUtils.getTree(immutableTree, config),
    })
  }

  const renderBuilder = (props: any) => (
    <div className="" >
      <div className="">
          <Builder {...props} />
      </div>
    </div>
  )
  
  return (
    <Query
      {...config} 
      value={tree}
      onChange={onChange}
      renderBuilder={renderBuilder}
    />
  );
}

export default  QueryBuilder