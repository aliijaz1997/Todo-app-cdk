#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { ServerlessTodoAppAwsCdkStack } from '../lib/serverless-todo-app-aws-cdk-stack';

const app = new cdk.App();
new ServerlessTodoAppAwsCdkStack(app, 'ServerlessTodoAppAwsCdkStack');
