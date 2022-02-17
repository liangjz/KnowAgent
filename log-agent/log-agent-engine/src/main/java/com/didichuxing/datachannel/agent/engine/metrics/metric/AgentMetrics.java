package com.didichuxing.datachannel.agent.engine.metrics.metric;

import java.util.List;

/**
 * Agent 相关指标，含：
 *  系统级指标
 *      disk/io 级指标
 *      net card 级指标
 *  进程级指标
 *  agent 业务级指标
 */
public class AgentMetrics {

    /**
     * 系统级指标
     */
    private SystemMetrics systemMetrics;

    /**
     * 进程级指标
     */
    private ProcessMetrics processMetrics;

    /**
     * disk/io 相关指标
     */
    private List<DiskIOMetrics> diskIOMetricsList;

    /**
     * net card 相关指标
     */
    private List<NetCardMetrics> netCardMetricsList;

    /**
     * agent 业务级指标
     */
    private AgentBusinessMetrics agentBusinessMetrics;

    public AgentMetrics(SystemMetrics systemMetrics, ProcessMetrics processMetrics, List<DiskIOMetrics> diskIOMetricsList, List<NetCardMetrics> netCardMetricsList, AgentBusinessMetrics agentBusinessMetrics) {
        this.systemMetrics = systemMetrics;
        this.processMetrics = processMetrics;
        this.diskIOMetricsList = diskIOMetricsList;
        this.netCardMetricsList = netCardMetricsList;
        this.agentBusinessMetrics = agentBusinessMetrics;
    }

    public AgentMetrics() {

    }

    public SystemMetrics getSystemMetrics() {
        return systemMetrics;
    }

    public ProcessMetrics getProcessMetrics() {
        return processMetrics;
    }

    public List<DiskIOMetrics> getDiskIOMetricsList() {
        return diskIOMetricsList;
    }

    public List<NetCardMetrics> getNetCardMetricsList() {
        return netCardMetricsList;
    }

    public AgentBusinessMetrics getAgentBusinessMetrics() {
        return agentBusinessMetrics;
    }

}
