(module
 (type $i32_i32_=>_i32 (func (param i32 i32) (result i32)))
 (memory $0 0)
 (export "add" (func $assembly/index/add))
 (export "mult" (func $assembly/index/mult))
 (export "sub" (func $assembly/index/sub))
 (export "div" (func $assembly/index/div))
 (export "memory" (memory $0))
 (func $assembly/index/add (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  i32.add
 )
 (func $assembly/index/mult (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  i32.mul
 )
 (func $assembly/index/sub (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  i32.sub
 )
 (func $assembly/index/div (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  i32.div_s
 )
)
