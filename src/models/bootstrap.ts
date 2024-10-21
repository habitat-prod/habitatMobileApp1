export interface IUserInfo {
    Device: IDeviceInfo;
    ota: IOtaInfo;
  }
  
  export interface IOtaInfo {
    version: string;
  }
  interface IDeviceInfo {
    DeviceName: string;
    BuildNumber: string;
    DeviceId: string;
    ReadableVersion: string;
    FingerPrint: string;
    AndroidId: string;
    IPAddress: string;
    DeviceType: string;
    FreeDiskStorageSpace: number;
    DeviceBrand: string;
    SystemName: string;
    SystemVersion: string;
    ApplicationName: string;
    BaseOS: string;
    BundleId: string;
    Carrier: string;
    Device: string;
    Display: string;
    DeviceToken: string;
    FirstInstallTime: string;
    IpAddress: string;
    InstallerPackageName: string;
    InstallReferrer: string;
    LastUpdateTime: string;
    InstanceId: string;
    MacAddress: string;
    Manufacturer: string;
    Model: string;
    BuildId: string;
    UniqueId: string;
  }
  