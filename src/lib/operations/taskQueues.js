/**
 * Future Multi-Agent Task Queue Scheduler
 * 
 * Manages priority job states, background queue dispatch registers,
 * and execution pipelines for future growth campaigns.
 */

export const QUEUE_PRIORITIES = {
  IMMEDIATE: 'immediate',
  HIGH: 'high',
  MEDIUM: 'medium',
  LOW: 'low'
};

export class AgentTaskQueue {
  constructor() {
    this.queue = [];
    this.activeWorkers = 0;
    this.maxConcurrent = 2;
  }

  enqueue(taskId, agentRole, priority = QUEUE_PRIORITIES.MEDIUM, payload = {}) {
    const job = {
      jobId: `job-${Math.random().toString(36).substring(2, 9)}`,
      taskId,
      agentRole,
      priority,
      payload,
      status: 'QUEUED',
      enqueuedAt: new Date().toISOString(),
      startedAt: null,
      completedAt: null
    };
    
    this.queue.push(job);
    // Sort by priority weights
    const priorityWeights = { immediate: 4, high: 3, medium: 2, low: 1 };
    this.queue.sort((a, b) => priorityWeights[b.priority] - priorityWeights[a.priority]);
    
    console.log(`[Task Queue] Enqueued priority '${priority}' job ${job.jobId} for ${agentRole}. Queue size: ${this.queue.length}`);
    return job;
  }

  dispatchNext() {
    if (this.activeWorkers >= this.maxConcurrent) return null;
    
    const nextJob = this.queue.find(j => j.status === 'QUEUED');
    if (!nextJob) return null;

    nextJob.status = 'RUNNING';
    nextJob.startedAt = new Date().toISOString();
    this.activeWorkers++;
    
    console.log(`[Task Queue] Dispatched job ${nextJob.jobId} to active workers.`);
    return nextJob;
  }

  completeJob(jobId, success = true) {
    const job = this.queue.find(j => j.jobId === jobId);
    if (job) {
      job.status = success ? 'SUCCESS' : 'FAILED';
      job.completedAt = new Date().toISOString();
      this.activeWorkers = Math.max(0, this.activeWorkers - 1);
    }
  }
}

// Export a singleton queue instance
export const globalOperationsQueue = new AgentTaskQueue();
