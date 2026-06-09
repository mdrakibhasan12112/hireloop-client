import { getCompanyJobs } from '@/lib/api/jobs';
import React from 'react';
import { Table, Button, Tooltip } from '@heroui/react';
// Gravity UI থেকে অ্যাকশন আইকনগুলো ইমপোর্ট করা হলো
import { Eye, Pencil, TrashBin } from '@gravity-ui/icons';

const RecruiterJobs = async () => {
  const companyId = 'comp_12345';
  const jobs = await getCompanyJobs(companyId);

  return (
    <div className="p-6 sm:p-10 bg-[#0d0d0e] min-h-screen text-[#ededef]">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white tracking-tight">
          Manage All Jobs
        </h2>
        <p className="text-sm text-[#a1a1aa] mt-1">
          Review, edit, or remove your company's active job listings.
        </p>
      </div>

      {/* Hero UI Table Wrapper */}
      <div className="bg-[#18181b] border border-[#27272a] rounded-xl overflow-hidden shadow-xl">
        <Table aria-label="Company job listings table">
          <Table.ScrollContainer>
            <Table.Content className="min-w-[800px]">
              <Table.Header>
                <Table.Column isRowHeader className="text-zinc-400">
                  Job Title
                </Table.Column>
                <Table.Column className="text-zinc-400">Type</Table.Column>
                <Table.Column className="text-zinc-400">
                  Salary Range
                </Table.Column>
                <Table.Column className="text-zinc-400">Location</Table.Column>
                <Table.Column className="text-zinc-400">Status</Table.Column>
                <Table.Column className="text-zinc-400 text-center">
                  Actions
                </Table.Column>
              </Table.Header>

              <Table.Body>
                {jobs && jobs.length > 0 ? (
                  jobs.map(job => (
                    <Table.Row
                      key={job._id?.$oid || job._id}
                      className="border-b border-[#27272a]/40 hover:bg-[#27272a]/20 transition-colors"
                    >
                      {/* Job Title */}
                      <Table.Cell className="font-medium text-white">
                        {job.title}
                      </Table.Cell>

                      {/* Job Type (Full-time/Part-time) */}
                      <Table.Cell className="text-zinc-300">
                        {job.type}
                      </Table.Cell>

                      {/* Salary Range (Min - Max Currency) */}
                      <Table.Cell className="text-zinc-300">
                        {job.minSalary} - {job.maxSalary} {job.currency}
                      </Table.Cell>

                      {/* Deadline */}
                      <Table.Cell className="text-zinc-400 text-sm">
                        {job.location}
                      </Table.Cell>

                      {/* Status with Badge styling */}
                      <Table.Cell>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${
                            job.status === 'active'
                              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                              : 'bg-zinc-500/10 text-zinc-400 border border-zinc-500/20'
                          }`}
                        >
                          {job.status}
                        </span>
                      </Table.Cell>

                      {/* Actions Icon Buttons */}
                      <Table.Cell>
                        <div className="flex items-center justify-center gap-2">
                          {/* View Details */}
                          <Tooltip content="View Details" closeDelay={0}>
                            <Button
                              isIconOnly
                              size="sm"
                              variant="light"
                              className="text-zinc-400 hover:text-white hover:bg-[#27272a] min-w-8 h-8 rounded-lg"
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                          </Tooltip>

                          {/* Edit Job */}
                          <Tooltip content="Edit Job" closeDelay={0}>
                            <Button
                              isIconOnly
                              size="sm"
                              variant="light"
                              className="text-zinc-400 hover:text-amber-400 hover:bg-amber-500/10 min-w-8 h-8 rounded-lg"
                            >
                              <Pencil className="w-4 h-4" />
                            </Button>
                          </Tooltip>

                          {/* Delete Job */}
                          <Tooltip
                            content="Delete Job"
                            color="danger"
                            closeDelay={0}
                          >
                            <Button
                              isIconOnly
                              size="sm"
                              variant="light"
                              className="text-zinc-400 hover:text-red-400 hover:bg-red-500/10 min-w-8 h-8 rounded-lg"
                            >
                              <TrashBin className="w-4 h-4" />
                            </Button>
                          </Tooltip>
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  ))
                ) : (
                  <Table.Row>
                    <Table.Cell
                      colSpan={6}
                      className="text-center text-zinc-500 py-8"
                    >
                      No jobs found for this company.
                    </Table.Cell>
                    {/* Hero UI-র Table স্ট্রাকচার ঠিক রাখার জন্য ফেইক সেল পাস করা হলো */}
                    <Table.Cell className="hidden"></Table.Cell>
                    <Table.Cell className="hidden"></Table.Cell>
                    <Table.Cell className="hidden"></Table.Cell>
                    <Table.Cell className="hidden"></Table.Cell>
                    <Table.Cell className="hidden"></Table.Cell>
                  </Table.Row>
                )}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </div>
    </div>
  );
};

export default RecruiterJobs;
