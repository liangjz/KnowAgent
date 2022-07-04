import React from 'react';
import moment from 'moment';

export const hostTypeMap = {
  0: '物理机',
  1: '容器',
  // 2:'VM虚拟机',
};

export const timeFormat = 'YYYY-MM-DD HH:mm:ss';

export const getHostInfo = (info: any) => {
  const columns = [
    {
      label: '主机IP',
      key: 'ip',
      span: 1,
    },
    {
      label: '主机类型',
      key: 'container',
      renderCustom: (t: any) => {
        return t || t === 0 ? hostTypeMap[t] : '-';
      },
      span: 1,
    },
    {
      label: '宿主机名',
      key: 'parentHostName',
      invisible: info?.container === 0,
      span: 1,
    },
    // {
    //   label: 'Agent版本名',
    //   key: 'agentVersion',
    // },
    // {
    //   label: '已开启日志采集任务数',
    //   key: 'openedLogCollectTaskNum',
    // }, {
    //   label: '已开启日志采集路径数',
    //   key: 'openedLogPathNum',
    // },
    // {
    //   label: '最近 agent 启动时间',
    //   key: 'lastestAgentStartupTime',
    //   render: (t: number) => moment(t).format(timeFormat),
    //   invisible: !(info.agentId !== null),
    // },
    // {
    //   label: '所属机房',
    //   key: 'machineZone',
    // },
    {
      label: '新增时间',
      key: 'hostCreateTime',
      renderCustom: (t: number) => {
        console.log(t, 'moment(t).format(timeFormat)');
        return moment(t).format(timeFormat);
      },
      span: 1,
    },
  ];

  return columns;
};

export const getAgentInfo = (info: any) => {
  const columns = [
    {
      label: 'Agent版本号',
      key: 'version',
    },
    {
      label: '版本描述',
      key: 'described',
    },
    {
      label: 'Agent CPU 限流阈值(单位：核)',
      key: 'cpuLimitThreshold',
    },
  ];

  return columns;
};

export const getAgentSeniorInfo = (info: any) => {
  const columns = [
    {
      label: '指标流接收集群 id',
      key: 'metricsSendReceiverId',
    },
    {
      label: '错误日志接收集群 id',
      key: 'errorLogsSendReceiverId',
    },
    {
      label: '指标流接收Topic',
      key: 'metricsSendTopic',
    },
    {
      label: '错误日志接收Topic',
      key: 'errorLogsSendTopic',
    },
    {
      label: '指标流生产端属性',
      key: 'metricsProducerConfiguration',
    },
    {
      label: '错误日志生产端属性',
      key: 'errorLogsProducerConfiguration',
    },
    {
      label: '配置信息',
      key: 'advancedConfigurationJsonString',
    },
  ];

  return columns;
};

export const getCollectTaskConfig = (drawer: any) => {
  const collectTaskConfig: any = [
    {
      title: '采集任务ID',
      dataIndex: 'clusterId',
      key: 'clusterId',
      align: 'center',
    },
    {
      title: '采集路径ID',
      dataIndex: 'pathId',
      key: 'pathId',
      align: 'center',
    },
    {
      title: '主文件名',
      dataIndex: 'masterFile',
      key: 'masterFile',
      align: 'center',
    },
    {
      title: '当前采集流量 & 条数/30s',
      dataIndex: 'sendByte',
      key: 'sendByte',
      align: 'center',
      width: 160,
      render: (text: any, record: any) => {
        return `${text} & ${record.sendCount}`;
      },
    },
    {
      title: '当前最大延迟',
      dataIndex: 'maxTimeGap',
      key: 'maxTimeGap',
      align: 'center',
    },
    {
      title: '当前采集时间',
      dataIndex: 'logTime',
      key: 'logTime',
      align: 'center',
      width: 160,
      render: (t: number) => moment(t).format(timeFormat),
    },
    {
      title: '文件最近修改时间',
      dataIndex: 'lastModifyTime',
      key: 'lastModifyTime',
      width: 160,
      align: 'center',
      render: (text: any, record: any) => {
        const collectFilesSort = record?.collectFiles.sort((a: any, b: any) => b.lastModifyTime - a.lastModifyTime);
        return moment(collectFilesSort[0]?.lastModifyTime).format(timeFormat);
      },
    },
    {
      title: '限流时长/30s',
      dataIndex: 'limitTime',
      key: 'limitTime',
      align: 'center',
    },
    {
      title: '异常截断条数/30s',
      dataIndex: 'filterTooLargeCount',
      key: 'filterTooLargeCount',
      align: 'center',
    },
    {
      title: '文件是否存在',
      dataIndex: 'fileExist',
      key: 'fileExist',
      align: 'center',
      render: (t: any) => {
        return t ? '是' : '否';
      },
    },
    {
      title: '文件是否存在乱序',
      dataIndex: 'isFileOrder',
      key: 'isFileOrder',
      align: 'center',
      render: (t: any, recoud: any) => {
        const isFileOrder = recoud?.collectFiles && recoud?.collectFiles.filter((item: any) => !item.isFileOrder).length;
        return isFileOrder ? '是' : '否';
      },
    },
    {
      title: '文件是否存在日志切片错误',
      dataIndex: 'validTimeConfig',
      key: 'validTimeConfig',
      align: 'center',
      render: (t: any, recoud: any) => {
        const validTimeConfig = recoud?.validTimeConfig && recoud?.validTimeConfig.filter((item: any) => !item.validTimeConfig).length;
        return validTimeConfig ? '是' : '否';
      },
    },
    {
      title: '文件过滤量/30s',
      dataIndex: 'filterOut',
      key: 'filterOut',
      align: 'center',
    },
    {
      title: '近一次心跳时间',
      dataIndex: 'heartbeatTime',
      key: 'heartbeatTime',
      align: 'center',
      width: 160,
      render: (t: number) => moment(t).format(timeFormat),
    },
    {
      title: '采集状态',
      dataIndex: 'taskStatus',
      key: 'taskStatus',
      align: 'center',
      render: (text: any) => {
        const status: any = {
          0: '停止',
          1: '运行中',
          2: '完成',
        };
        return status[text];
      },
    },
    {
      title: '采集文件信息',
      dataIndex: 'collectFiles',
      key: 'collectFiles',
      // fixed: 'right',
      align: 'center',
      width: 120,
      render: (text: any, record: any) => {
        return (
          <div>
            <span>共{text.length}个</span>
            <a
              style={{ display: 'inline-block', marginLeft: '15px' }}
              onClick={() => {
                // drawer('CollectFileInfoDetail', text);
              }}
            >
              查看
            </a>
          </div>
        );
      },
    },
    {
      title: '近一次指标详情',
      dataIndex: 'MetricDetail',
      key: 'MetricDetail',
      align: 'center',
      // fixed: 'right',
      width: 120,
      render: (text: any, record: any) => {
        return (
          <div>
            <span>共1个</span>
            <a
              style={{ display: 'inline-block', marginLeft: '15px' }}
              onClick={() => {
                // drawer('MetricDetail', record);
              }}
            >
              查看
            </a>
          </div>
        );
      },
    },
  ];
  return collectTaskConfig;
};
