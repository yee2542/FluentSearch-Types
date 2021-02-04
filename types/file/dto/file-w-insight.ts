import { BaseFileSchema, FileTypeEnum } from '..';
import { InsightInfoDto } from '../../insight';

export type FileWithInsightDto<T extends FileTypeEnum, M> = BaseFileSchema<T, M> & {
  uri: string;
  insight?: InsightInfoDto[];
};