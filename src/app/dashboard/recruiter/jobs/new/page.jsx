
'use client';

import React, { useState } from 'react';
import {
  Form,
  Select,
  ListBox,
  Label,
  Input,
  TextArea,
  TextField,
  Switch,
  Button,
  toast, // নিশ্চিত করুন আপনার গ্লোবাল Layout-এ <ToastProvider /> অ্যাড করা আছে
} from '@heroui/react';
import { ChevronDown, Briefcase, FileText } from '@gravity-ui/icons';
import { createJob } from '@/lib/actions/jobs';
import { redirect } from 'next/navigation';

const INITIAL_FORM_STATE = {
  title: '',
  category: 'Technology',
  type: 'Full-time',
  minSalary: '',
  maxSalary: '',
  currency: 'USD',
  location: '',
  isRemote: false,
  deadline: '',
  responsibilities: '',
  requirements: '',
  benefits: '',
};

export default function PostJobPage() {
  // Mock Recruiter Company Profile
  const companyData = {
    name: 'NovaStream AI',
    id: 'comp_12345',
    isApproved: true,
    plan: 'Free',
    activeJobsCount: 1,
    jobLimit: 3,
  };

  // Form State
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, key) => {
    if (key) {
      setFormData(prev => ({ ...prev, [name]: key }));
    }
  };

  const handleSwitchChange = isSelected => {
    setFormData(prev => ({
      ...prev,
      isRemote: isSelected,
      location: isSelected ? 'Remote' : '',
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    // প্ল্যান ভ্যালিডেশন
    if (companyData.activeJobsCount >= companyData.jobLimit) {
      setErrorMsg(
        `Upgrade required. You have reached the maximum active job limit (${companyData.jobLimit}) for the ${companyData.plan} plan.`,
      );
      return;
    }

    if (!companyData.isApproved) {
      setErrorMsg(
        'Your company profile must be approved before you can post jobs.',
      );
      return;
    }

    setIsSubmitting(true);

    try {
      // ডেটা পে-লোড গোছানো
      const payload = {
        ...formData,
        companyId: companyData.id,
        status: 'active',
      };

      console.log('Submitting Payload:', payload);

      // FIXED: createJob অ্যাকশনে আসল ডেটা (payload) পাঠানো হলো
      const res = await createJob(payload);

      if (res && res.insertedId) {
        // টোস্ট নোটিফিকেশন দেখানো
        toast.success('Job posted successfully!');
        setSuccessMsg('Job posted successfully! Resetting form...');
        

        // ফিনিশিং টাচ: স্টেট একদম খালি বা ডিফল্ট করে দেওয়া (অটোমেটিক রিফ্রেশ)
        setTimeout(() => {
          setFormData(INITIAL_FORM_STATE);
          setSuccessMsg('');
          redirect('/dashboard/recruiter');
        }, 1500);
      } else {
        setErrorMsg(res?.message || 'Failed to create job post.');
      }
    } catch (err) {
      setErrorMsg('An unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isPlanExceeded = companyData.activeJobsCount >= companyData.jobLimit;

  return (
    <div className="min-h-screen bg-[#0d0d0e] text-[#ededef] py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="w-full max-w-3xl bg-[#18181b] border border-[#27272a] rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-[#27272a]">
          <h1 className="text-2xl font-semibold text-white tracking-tight">
            Post a New Job
          </h1>
          <p className="text-sm text-[#a1a1aa] mt-1">
            Fill out the details below to publish an open position for{' '}
            <span className="text-white font-medium">{companyData.name}</span>.
          </p>
        </div>

        {/* Plan Banner */}
        <div className="bg-[#27272a]/40 px-6 sm:px-8 py-3 border-b border-[#27272a] flex justify-between text-xs text-[#a1a1aa]">
          <div>
            Plan:{' '}
            <span className="text-amber-400 font-semibold">
              {companyData.plan}
            </span>
          </div>
          <div>
            Usage:{' '}
            <span className="text-white font-medium">
              {companyData.activeJobsCount}
            </span>{' '}
            / {companyData.jobLimit} Active Jobs
          </div>
        </div>

        {/* Form Container */}
        <Form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-8">
          {/* SECTION 1: Job Info */}
          <div className="space-y-6 w-full">
            <div className="flex items-center gap-2 pb-2 border-b border-[#27272a]/60">
              <Briefcase className="w-4 h-4 text-zinc-400" />
              <h2 className="text-base font-medium text-zinc-200">
                Job Information
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <Label className="text-zinc-300 text-sm font-normal">
                  Job Title
                </Label>
                <Input
                  name="title"
                  placeholder="e.g. Senior Frontend Engineer"
                  required
                  value={formData.title}
                  onChange={handleInputChange}
                  className="bg-[#27272a]/50 border border-[#3f3f46] hover:bg-[#27272a] text-white text-sm h-10 px-3 rounded-xl flex items-center justify-between w-full focus-within:border-zinc-400 outline-none"
                />
              </div>

              {/* Category Select */}
              <div className="flex flex-col">
                <Label className="text-zinc-300 text-sm mb-1.5 font-normal">
                  Job Category
                </Label>
                <Select
                  placeholder="Select category"
                  selectedKey={formData.category}
                  onSelectionChange={key => handleSelectChange('category', key)}
                  className="w-full"
                >
                  <Select.Trigger className="bg-[#27272a]/50 border border-[#3f3f46] hover:bg-[#27272a] text-white text-sm h-10 px-3 rounded-xl flex items-center justify-between w-full">
                    <Select.Value />
                    <Select.Indicator>
                      <ChevronDown className="w-4 h-4 text-zinc-400" />
                    </Select.Indicator>
                  </Select.Trigger>
                  <Select.Popover className="bg-[#18181b] border border-[#27272a] rounded-xl shadow-xl">
                    <ListBox className="p-1 text-white">
                      <ListBox.Item
                        id="Technology"
                        className="p-2 rounded-lg hover:bg-[#27272a] cursor-pointer text-sm"
                      >
                        Technology
                      </ListBox.Item>
                      <ListBox.Item
                        id="Design"
                        className="p-2 rounded-lg hover:bg-[#27272a] cursor-pointer text-sm"
                      >
                        Design
                      </ListBox.Item>
                      <ListBox.Item
                        id="Marketing"
                        className="p-2 rounded-lg hover:bg-[#27272a] cursor-pointer text-sm"
                      >
                        Marketing
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Job Type Select */}
              <div className="flex flex-col">
                <Label className="text-zinc-300 text-sm mb-1.5 font-normal">
                  Job Type
                </Label>
                <Select
                  placeholder="Select job type"
                  selectedKey={formData.type}
                  onSelectionChange={key => handleSelectChange('type', key)}
                  className="w-full"
                >
                  <Select.Trigger className="bg-[#27272a]/50 border border-[#3f3f46] hover:bg-[#27272a] text-white text-sm h-10 px-3 rounded-xl flex items-center justify-between w-full">
                    <Select.Value />
                    <Select.Indicator>
                      <ChevronDown className="w-4 h-4 text-zinc-400" />
                    </Select.Indicator>
                  </Select.Trigger>
                  <Select.Popover className="bg-[#18181b] border border-[#27272a] rounded-xl shadow-xl">
                    <ListBox className="p-1 text-white">
                      <ListBox.Item
                        id="Full-time"
                        className="p-2 rounded-lg hover:bg-[#27272a] cursor-pointer text-sm"
                      >
                        Full-time
                      </ListBox.Item>
                      <ListBox.Item
                        id="Part-time"
                        className="p-2 rounded-lg hover:bg-[#27272a] cursor-pointer text-sm"
                      >
                        Part-time
                      </ListBox.Item>
                      <ListBox.Item
                        id="Contract"
                        className="p-2 rounded-lg hover:bg-[#27272a] cursor-pointer text-sm"
                      >
                        Contract
                      </ListBox.Item>
                      <ListBox.Item
                        id="Internship"
                        className="p-2 rounded-lg hover:bg-[#27272a] cursor-pointer text-sm"
                      >
                        Internship
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Work Location Setup (Switch Component) */}
              <div className="space-y-2">
                <label className="text-sm text-zinc-300 block font-normal">
                  Work Location Setup
                </label>
                <div className="flex items-center justify-between h-10 px-3 bg-[#27272a]/30 border border-[#3f3f46] rounded-xl">
                  <span className="text-sm text-zinc-400">
                    Fully Remote Position
                  </span>

                  <Switch
                    isSelected={formData.isRemote}
                    onChange={() => handleSwitchChange(!formData.isRemote)}
                  >
                    <Switch.Control
                      className={`w-9 h-5 rounded-full flex items-center px-0.5 transition-colors duration-200 cursor-pointer ${
                        formData.isRemote
                          ? 'bg-white'
                          : 'bg-transparent border border-zinc-600'
                      }`}
                    >
                      <Switch.Thumb
                        className={`w-3.5 h-3.5 rounded-full transition-transform duration-200 ${
                          formData.isRemote
                            ? 'bg-black translate-x-4'
                            : 'bg-zinc-400'
                        }`}
                      />
                    </Switch.Control>
                  </Switch>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="md:col-span-2 flex flex-col gap-1.5">
                <Label className="text-zinc-300 text-sm font-normal">
                  Location
                </Label>
                <Input
                  name="location"
                  placeholder="e.g. San Francisco, CA"
                  disabled={formData.isRemote}
                  required={!formData.isRemote}
                  value={formData.location}
                  onChange={handleInputChange}
                  className="bg-[#27272a]/50 border border-[#3f3f46] hover:bg-[#27272a] text-white text-sm h-10 px-3 rounded-xl flex items-center justify-between w-full disabled:opacity-40 outline-none"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-zinc-300 text-sm font-normal">
                  Application Deadline
                </Label>
                <Input
                  name="deadline"
                  type="date"
                  required
                  value={formData.deadline}
                  onChange={handleInputChange}
                  className="bg-[#27272a]/50 border border-[#3f3f46] hover:bg-[#27272a] text-white text-sm h-10 px-3 rounded-xl flex items-center justify-between w-full dark:[color-scheme:dark] outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-end">
              <div className="flex flex-col gap-1.5">
                <Label className="text-zinc-300 text-sm font-normal">
                  Min Salary
                </Label>
                <Input
                  name="minSalary"
                  type="number"
                  placeholder="0"
                  required
                  value={formData.minSalary}
                  onChange={handleInputChange}
                  className="bg-[#27272a]/50 border border-[#3f3f46] hover:bg-[#27272a] text-white text-sm h-10 px-3 rounded-xl flex items-center justify-between w-full outline-none"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label className="text-zinc-300 text-sm font-normal">
                  Max Salary
                </Label>
                <Input
                  name="maxSalary"
                  type="number"
                  placeholder="0"
                  required
                  value={formData.maxSalary}
                  onChange={handleInputChange}
                  className="bg-[#27272a]/50 border border-[#3f3f46] hover:bg-[#27272a] text-white text-sm h-10 px-3 rounded-xl flex items-center justify-between w-full outline-none"
                />
              </div>

              {/* Currency Select */}
              <div className="flex flex-col">
                <Label className="text-zinc-300 text-sm mb-1.5 font-normal">
                  Currency
                </Label>
                <Select
                  placeholder="Currency"
                  selectedKey={formData.currency}
                  onSelectionChange={key => handleSelectChange('currency', key)}
                  className="w-full"
                >
                  <Select.Trigger className="bg-[#27272a]/50 border border-[#3f3f46] hover:bg-[#27272a] text-white text-sm h-10 px-3 rounded-xl flex items-center justify-between w-full">
                    <Select.Value />
                    <Select.Indicator>
                      <ChevronDown className="w-4 h-4 text-zinc-400" />
                    </Select.Indicator>
                  </Select.Trigger>
                  <Select.Popover className="bg-[#18181b] border border-[#27272a] rounded-xl shadow-xl">
                    <ListBox className="p-1 text-white">
                      <ListBox.Item
                        id="USD"
                        className="p-2 rounded-lg hover:bg-[#27272a] cursor-pointer text-sm"
                      >
                        USD ($)
                      </ListBox.Item>
                      <ListBox.Item
                        id="EUR"
                        className="p-2 rounded-lg hover:bg-[#27272a] cursor-pointer text-sm"
                      >
                        EUR (€)
                      </ListBox.Item>
                      <ListBox.Item
                        id="GBP"
                        className="p-2 rounded-lg hover:bg-[#27272a] cursor-pointer text-sm"
                      >
                        GBP (£)
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>
            </div>
          </div>

          {/* SECTION 2: Role Specifications */}
          <div className="space-y-6 w-full">
            <div className="flex items-center gap-2 pb-2 border-b border-[#27272a]/60">
              <FileText className="w-4 h-4 text-zinc-400" />
              <h2 className="text-base font-medium text-zinc-200">
                Role Specifications
              </h2>
            </div>

            <TextField
              name="responsibilities"
              isRequired
              className="flex flex-col gap-1.5 w-full"
            >
              <Label className="text-zinc-300 text-sm font-normal">
                Core Responsibilities
              </Label>
              <TextArea
                placeholder="Outline day-to-day tasks, expectations, and production ownership targets..."
                rows={4}
                value={formData.responsibilities}
                onChange={handleInputChange}
                className="w-full bg-[#27272a]/50 border border-[#3f3f46] hover:bg-[#27272a] focus:bg-[#27272a] text-white placeholder:text-zinc-500 text-sm rounded-xl p-3 outline-none min-h-[100px] transition-colors resize-y"
              />
            </TextField>

            <TextField
              name="requirements"
              isRequired
              className="flex flex-col gap-1.5 w-full"
            >
              <Label className="text-zinc-300 text-sm font-normal">
                Requirements & Qualifications
              </Label>
              <TextArea
                placeholder="List required technical stacks, experience metrics, certifications, etc..."
                rows={4}
                value={formData.requirements}
                onChange={handleInputChange}
                className="w-full bg-[#27272a]/50 border border-[#3f3f46] hover:bg-[#27272a] focus:bg-[#27272a] text-white placeholder:text-zinc-500 text-sm rounded-xl p-3 outline-none min-h-[100px] transition-colors resize-y"
              />
            </TextField>

            <TextField name="benefits" className="flex flex-col gap-1.5 w-full">
              <Label className="text-zinc-300 text-sm font-normal">
                Benefits & Perks (Optional)
              </Label>
              <TextArea
                placeholder="Healthcare coverage, flexible schedules, hardware stipends, equity packages..."
                rows={3}
                value={formData.benefits}
                onChange={handleInputChange}
                className="w-full bg-[#27272a]/50 border border-[#3f3f46] hover:bg-[#27272a] focus:bg-[#27272a] text-white placeholder:text-zinc-500 text-sm rounded-xl p-3 outline-none min-h-[80px] transition-colors resize-y"
              />
            </TextField>
          </div>

          {/* Feedback Area */}
          {errorMsg && (
            <div className="p-3.5 w-full rounded-xl bg-red-950/40 border border-red-900/50 text-red-400 text-sm">
              {errorMsg}
            </div>
          )}

          {successMsg && (
            <div className="p-3.5 w-full rounded-xl bg-emerald-950/40 border border-emerald-900/50 text-emerald-400 text-sm">
              {successMsg}
            </div>
          )}

          {/* Footer Actions */}
          <div className="pt-4 border-t border-[#27272a] flex justify-end gap-3 w-full">
            <Button
              type="button"
              className="bg-[#27272a] text-zinc-300 hover:bg-[#3f3f46] h-10 px-5 rounded-xl text-sm"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isPlanExceeded || isSubmitting}
              isLoading={isSubmitting}
              className={`h-10 px-6 font-medium text-black rounded-xl bg-white hover:bg-zinc-200 text-sm transition-colors ${
                isPlanExceeded ? 'opacity-45 cursor-not-allowed' : ''
              }`}
            >
              Publish Job
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}