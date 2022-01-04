package com.didichuxing.datachannel.agentmanager.persistence.mysql;

import com.didichuxing.datachannel.agentmanager.common.bean.po.metrics.MetricsSystemPO;

public interface MetricsSystemPOMapper {
    int deleteByPrimaryKey(Long id);

    int insert(MetricsSystemPO record);

    int insertSelective(MetricsSystemPO record);

    MetricsSystemPO selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(MetricsSystemPO record);

    int updateByPrimaryKey(MetricsSystemPO record);
}